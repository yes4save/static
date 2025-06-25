"use client";
import { useSearchParams, useRouter } from "next/navigation";
import DonateButton from "@/app/components/DonateButton";

export default function DonatePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const showModal = searchParams.get("modal") === "1";
  const redirectTo = searchParams.get("redirect") || "/";

  const closeModal = () => {
    router.push(redirectTo);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10">Donate Page</h1>
      {showModal && <DonateButton toggleModal={closeModal} />}
    </>
  );
}