import Link from "next/link";
import { Mail } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full text-foreground flex flex-col items-center mt-30">
      <p className="text-xl md:text-2xl text-foreground/60 font-mono mb-8 text-center px-4">
        Send me an email to book a session
      </p>

      {/* Dashed Pill Button */}
      <a
        href="mailto:enocholaoluwa58@gmail.com"
        className="relative group flex items-center justify-center px-12 py-10 md:px-16 md:py-16 rounded-[100px] border-4 border-dashed border-foreground/20 hover:border-foreground/50 transition-colors cursor-pointer mb-10 w-full max-w-2xl"
      >
        <span className="text-5xl md:text-6xl font-mono text-foreground/60 group-hover:text-foreground transition-colors text-center">
          Contact me
        </span>
      </a>

      {/* Bottom Bar */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-between pt-8 pb-12 mt-12 border-t border-foreground/10 gap-8 md:gap-0">
        {/* Left: Email */}
        <div className="flex items-center justify-center md:justify-start">
          <a
            href="mailto:enocholaoluwa58@gmail.com"
            className="flex items-center gap-4 text-foreground/60 font-mono text-sm hover:text-foreground transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
              <Mail className="w-4 h-4" />
            </div>
            <span>@enocholaoluwa58@gmail.com</span>
          </a>
        </div>

        {/* Center: Copyright */}
        <div className="text-center text-foreground/40 font-mono text-sm flex flex-col gap-1 order-3 md:order-2">
          <p className="uppercase tracking-widest">The Olaoluwa 2026 ©</p>
          <div className="flex gap-1 justify-center items-center">
            <span>Built by</span>
            <a
              href="https://teslimliasu.xyz"
              className="text-foreground/80 hover:text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors"
            >
              @devtess
            </a>
          </div>
        </div>

        {/* Right: Socials */}
        <div className="flex items-center justify-center md:justify-end gap-4 order-2 md:order-3">
          <Link
            href="https://www.instagram.com/the_olao_luwa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:bg-foreground hover:text-background transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:bg-foreground hover:text-background transition-colors"
            aria-label="TikTok"
          >
            <FaTiktok className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
