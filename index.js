import { Resend } from 'resend';

const resend = new Resend('re_123456789');

(async function() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'delivered@resend.dev',
      subject: 'Hello World',
      html: '<strong>it works!</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();