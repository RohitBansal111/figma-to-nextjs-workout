import './globals.css';
import Layout from '../components/layout/Layout';
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import FeaturedBrands from '../components/FeaturedBrands';
import FeaturesSection from '../components/FeaturesSection';
import FreeWorkoutsSection from '../components/FreeWorkoutsSection';
import PremiumTrainingSection from '../components/PremiumTrainingSection';
import MembershipSection from '../components/MembershipSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Workout With Me | Fitness & Healthy Living</title>
        <meta name="description" content="Join our fitness community for workouts, healthy recipes, and transformation stories to help you get fit and stay fit!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main className="min-h-screen bg-black">
      <HeroSection />
      <FeaturedBrands />
      <FeaturesSection />
      <FreeWorkoutsSection />
      <PremiumTrainingSection />
      <MembershipSection />
      <Footer />
    </main>
      </Layout>
    </>
  );
}
