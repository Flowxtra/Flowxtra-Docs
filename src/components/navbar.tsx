import { LanguageSwitcher } from './language-switcher';

export function NavbarActions() {
  return (
    <div className="flex items-center gap-2">
      <LanguageSwitcher />
    </div>
  );
}
