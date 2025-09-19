export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Terms of Service
      </h1>
      <p className="mt-2 text-slate-600">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <div className="prose prose-slate max-w-none mt-8">
        <h2>Agreement</h2>
        <p>
          By accessing or using ScriptLab you agree to these Terms. If you are
          using the service on behalf of an organization, you represent that you
          have authority to bind that organization to these Terms.
        </p>

        <h2>Access and accounts</h2>
        <p>
          You must provide accurate information and keep your account secure.
          You are responsible for activity under your account. We may suspend or
          terminate accounts that violate these Terms.
        </p>

        <h2>Acceptable use</h2>
        <ul>
          <li>Do not misuse the service or interfere with its operation.</li>
          <li>
            Only analyze content that you have the right to access (e.g. public
            profiles).
          </li>
          <li>
            Do not attempt to reverse engineer or circumvent security features.
          </li>
        </ul>

        <h2>Intellectual property</h2>
        <p>
          We own all rights to the service and its content except user-provided
          inputs and outputs. You retain ownership of your data.
        </p>

        <h2>Privacy</h2>
        <p>
          Our <a href="/privacy">Privacy Policy</a> explains how we collect and
          use information.
        </p>

        <h2>Disclaimers</h2>
        <p>
          The service is provided "as is" without warranties of any kind. To the
          fullest extent permitted by law, we disclaim all warranties including
          fitness for a particular purpose.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we will not be liable for any
          indirect, incidental, special, consequential or punitive damages, or
          any loss of profits or revenues.
        </p>

        <h2>Termination</h2>
        <p>
          You may stop using the service at any time. We may suspend or
          terminate the service or your access at our discretion if you violate
          these Terms or to protect the service.
        </p>

        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction where we are
          based.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these Terms from time to time. If changes are material,
          we will notify you via the site or email.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:bencasdedenes6@gmail.com">bencasdedenes6@gmail.com</a>
          .
        </p>
      </div>
    </div>
  );
}
