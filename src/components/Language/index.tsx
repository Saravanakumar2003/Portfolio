import Link from 'next/link';
import { useRouter } from 'next/router';


const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ta')}>தமிழ்</button>
    </div>
  );
};

export default LanguageSwitcher;