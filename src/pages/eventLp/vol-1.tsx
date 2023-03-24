import Layout from "@/layout/Layout";
import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Ideatheme from "@/components/IdeathonThema";
import IdeathonFeatures from "@/components/IdeathonFeatures";
import Info from "@/components/Info";
import Sponsor from "@/components/Sponsor/Sponsor";
import FAQ from "@/components/FAQ";
import { Twitter } from "@/components/Twitter";

export const Vol1 = () => {
  return (
    <Layout>
      <Hero />
      <Ideatheme />
      <IdeathonFeatures />
      <Info />
      <Schedule />
      <Sponsor />
      <FAQ />
      <Twitter />
    </Layout>
  );
};
