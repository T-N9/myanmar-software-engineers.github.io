import Container from "@/components/Common/Container/Container";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import HomeSection from "@/components/MSE/HomeSection";
import JoinSection from "@/components/MSE/JoinSection";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home - ${APP_CONFIG.title}`,
  description: APP_CONFIG.description,
};

export default function HomePage() {
  return (
    <Container withPadding>
      {/* Home Section: Start */}
      <HomeSection />
      {/* Home Section: Finished */}

      <SpacingDivider />

      {/* Joined Section: Start */}
      <JoinSection />
      {/* Joined Section: Finished */}

      <SpacingDivider />
    </Container>
  );
}