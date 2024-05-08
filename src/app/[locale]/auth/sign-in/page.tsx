import { useTranslations } from 'next-intl';
import SignIn from './SignIn';

export default function SingInPage() {
  const t = useTranslations();

  const texts: any = {
    required: t('required'),
    enterYourNick: t('enterYourNick'),
    enterYourPassword: t('enterYourPassword'),
    signIn: t('signIn'),
    invalidCredentials: 'Invalid credentials',
  };

  return <SignIn t={texts} />;
}
