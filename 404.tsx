import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <Layout pageTitle="Not Found Page">
      <div>
        <h1 className="title-not-found">opps...</h1>
        <h1 className="title-not-found">Halaman tidak ditemukan</h1>
      </div>
    </Layout>
  );
}