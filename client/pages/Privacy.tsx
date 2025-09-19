export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        Privacy Policy
      </h1>
      <p className="mt-2 text-slate-600">
        Last updated: {new Date().toISOString().slice(0, 10)}
      </p>

      <div className="prose prose-slate max-w-none mt-8">
        <h2>Overview</h2>
        <p>
          We take your privacy seriously. This policy explains what data we
          collect, how we use it, and the choices you have. By using ScriptLab
          you agree to this policy.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>
            Account and contact information you submit such as name, company and
            email when requesting access or contacting us.
          </li>
          <li>
            Usage information like pages viewed, device/browser information and
            IP address for security and analytics.
          </li>
          <li>
            Content you choose to analyze with ScriptLab (e.g. public profile
            URLs). We store generated transcripts and derived insights to power
            search and analytics.
          </li>
        </ul>

        <h2>How we use information</h2>
        <ul>
          <li>
            Provide and improve the service, including research quality and
            performance.
          </li>
          <li>
            Communicate with you about product updates, security, and support.
          </li>
          <li>
            Detect, prevent and address fraud, abuse, and technical issues.
          </li>
        </ul>

        <h2>Data retention</h2>
        <p>
          We retain transcripts and metadata for as long as your account is
          active or as needed to provide the service. You can request deletion
          at any time.
        </p>

        <h2>Security</h2>
        <p>
          Data is encrypted in transit and at rest. Access is limited to
          authorized personnel and is logged. We follow industry best practices
          and continuously improve our safeguards.
        </p>

        <h2>Your rights</h2>
        <p>
          You may request access, correction, export or deletion of your
          personal data. Contact us at
          <a href="mailto:bencasdedenes6@gmail.com">
            {" "}
            bencasdedenes6@gmail.com
          </a>{" "}
          to exercise your rights.
        </p>

        <h2>Third parties</h2>
        <p>
          We may use trusted processors for hosting, analytics and
          communications. These providers process data on our behalf under
          agreements consistent with this policy.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy. Material changes will be communicated via
          the site or email.
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
