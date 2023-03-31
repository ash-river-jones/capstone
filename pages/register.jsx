import Header from '@/components/Header';
import RegisterForm from '@/components/RegisterForm';
import Footer from '@/components/Footer';

export default function Register() {
	return (
		<>
			<Header auth={'register'} />
			<RegisterForm />
			<Footer />
		</>
	);
}
