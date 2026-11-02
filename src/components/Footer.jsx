import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-30 w-full border-t border-[#0b1a45]/15 pt-5 pb-2">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#0b1a45] font-medium">
        <span>© {new Date().getFullYear()} Kajal Bharti</span>
        <a
          href="mailto:kajal.cloudops@gmail.com"
          className="font-semibold text-[#0a3fc4] hover:underline"
        >
          kajal.cloudops@gmail.com
        </a>
      </div>
    </footer>
  );
}
