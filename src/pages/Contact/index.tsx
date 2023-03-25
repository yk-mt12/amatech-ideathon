import Layout from "@/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="flex justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScYi4rNRpqfpvq-MQAHK533VULHLskx9KezZh0qT9sCovxQNA/viewform?embedded=true"
          width="100%"
          height="800"
          className="max-w-screen-lg"
        >
          読み込んでいます…
        </iframe>
      </div>
    </Layout>
  );
};

export default Contact;
