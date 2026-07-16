import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
  privacy: boolean
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validateForm(data: any): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name muss mindestens 2 Zeichen lang sein')
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Gültige Email-Adresse erforderlich')
  }

  if (!data.service || data.service.trim().length === 0) {
    errors.push('Bitte wähle einen Service aus')
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Nachricht muss mindestens 10 Zeichen lang sein')
  }

  if (!data.privacy) {
    errors.push('Datenschutz muss akzeptiert werden')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

function getServiceLabel(service: string): string {
  const labels: Record<string, string> = {
    webdesign: 'Webdesign & Development',
    relaunch: 'Relaunch & Modernisierung',
    seo: 'SEO-Optimierung',
    wartung: 'Website-Wartung & Support',
    beratung: 'Kostenlose Erstberatung',
    sonstiges: 'Sonstiges',
  }
  return labels[service] || service
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validierung
    const validation = validateForm(body)
    if (!validation.valid) {
      return NextResponse.json(
        { error: 'Validierungsfehler', details: validation.errors },
        { status: 400 }
      )
    }

    // Prüfe ob Email-Credentials vorhanden sind
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      // Fallback: Nur loggen, wenn keine Credentials vorhanden
      console.log('📧 Kontaktformular eingegangen (Email nicht konfiguriert):', {
        name: body.name,
        email: body.email,
        service: body.service,
      })

      return NextResponse.json({
        success: true,
        message: 'Nachricht empfangen! Email-Versand ist noch nicht konfiguriert.',
      })
    }

    // Nodemailer Transporter konfigurieren
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    // Email an Inhaber senden
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'pfisti68@gmail.com',
      subject: `Neue Anfrage: ${getServiceLabel(body.service)}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
        ${body.phone ? `<p><strong>Telefon:</strong> ${body.phone}</p>` : ''}
        ${body.company ? `<p><strong>Unternehmen:</strong> ${body.company}</p>` : ''}
        <p><strong>Service:</strong> ${getServiceLabel(body.service)}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${body.message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p style="font-size: 12px; color: #999;">Diese Email wurde über das Kontaktformular gesendet.</p>
      `,
      replyTo: body.email,
    })

    // Bestätigungsemail an Besucher senden
    try {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: body.email,
        subject: 'Deine Anfrage bei Webdesign-Pfisterer',
        html: `
          <h2>Danke für deine Anfrage!</h2>
          <p>Hallo ${body.name},</p>
          <p>wir haben deine Anfrage erhalten und melden uns in Kürze bei dir.</p>
          <p><strong>Deine Anfrage:</strong> ${getServiceLabel(body.service)}</p>
          <hr />
          <p style="font-size: 12px; color: #999;">Diese Email wurde automatisch versendet.</p>
        `,
      })
    } catch (error) {
      // Bestätigungsemail fehlgeschlagen ist nicht kritisch
      console.error('Fehler beim Versand der Bestätigungsemail:', error)
    }

    console.log('✅ Email versendet für Anfrage von:', body.name)

    return NextResponse.json({
      success: true,
      message: 'Nachricht gesendet! Ich melde mich in Kürze bei dir.',
    })
  } catch (error) {
    console.error('Fehler beim Verarbeiten der Kontaktanfrage:', error)
    return NextResponse.json(
      { error: 'Fehler beim Verarbeiten der Anfrage', details: (error as Error).message },
      { status: 500 }
    )
  }
}
