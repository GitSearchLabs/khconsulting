import { Container } from "@/components/ui/container";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

const expertise = [
  { label: "Regulatory Strategy", href: "#services" },
  { label: "Facility Development", href: "#services" },
  { label: "Strategic Growth", href: "#services" },
];

export function Footer() {
  return (
    <footer className="bg-[#09100f] text-[#e4beba]">
      <Container className="grid gap-12 py-16 md:grid-cols-2 md:py-24 lg:grid-cols-[1.05fr_1fr_1fr_1fr] lg:gap-20">
        <div>
          <a
            href="#top"
            className="font-display text-[25px] font-bold tracking-[-0.025em] text-crimson-soft sm:text-[29px]"
          >
            Karing Hearts Consulting
          </a>
          <p className="mt-7 max-w-[330px] text-[17px] leading-7 sm:mt-9 sm:text-[18px]">
            Helping independent physicians build the future of specialty care
            through expert regulatory, strategic, and operational guidance.
          </p>
          <a
            href="https://www.linkedin.com"
            className="mt-14 inline-flex size-8 items-center justify-center rounded bg-[#e4beba] font-display text-[22px] font-bold leading-none text-[#09100f] hover:bg-crimson-soft"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>

        <FooterColumn title="Navigation" items={navigation} />
        <FooterColumn title="Expertise" items={expertise} />

        <div>
          <h2 className="text-label-sm text-foreground">Contact</h2>
          <address className="mt-9 space-y-7 break-words not-italic">
            <FooterContact icon={<MapPinIcon />} text="Johnson City, TN" />
            <FooterContact icon={<PhoneIcon />} text="(555) 123-4567" />
            <FooterContact icon={<MailIcon />} text="info@karinghearts.com" />
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-6 py-10 text-[16px] leading-7 md:flex-row md:items-center md:justify-between md:text-[17px]">
          <p>© 2024 Karing Hearts Consulting. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            <a href="#privacy" className="hover:text-crimson-soft">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-crimson-soft">
              Terms of Service
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="text-label-sm text-foreground">{title}</h2>
      <nav className="mt-9 flex flex-col gap-7" aria-label={title}>
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[20px] leading-none hover:text-crimson-soft"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

function FooterContact({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <p className="flex items-center gap-4 text-[18px] leading-7 sm:text-[20px] sm:leading-none">
      <span className="text-[#e4beba]" aria-hidden="true">
        {icon}
      </span>
      {text}
    </p>
  );
}

function MapPinIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10.5h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.8.62 2.65a2 2 0 0 1-.45 2.11L8 9.75a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.74.5 2.65.62A2 2 0 0 1 22 16.9Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m22 7-10 6L2 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
