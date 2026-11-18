import pl300Badge from "../assets/badges/img1.png";
import dp900Badge from "../assets/badges/img2.png";
import sqlAiDeveloperBadge from "../assets/badges/img3.png";
import dp600Badge from "../assets/badges/img4.png";
import dp800Certificate from "../assets/certificate-dp800.jpeg";

// Main badges shown in the hero section, in display order
const heroBadges = [
  {
    key: "pl-300",
    title: "Microsoft Certified: Power BI Data Analyst Associate",
    image: pl300Badge,
  },
  {
    key: "dp-600",
    title: "Microsoft Certified: Fabric Analytics Engineer Associate",
    image: dp600Badge,
  },
  {
    key: "dp-900",
    title: "Microsoft Certified: Azure Data Fundamentals",
    image: dp900Badge,
  },
  {
    key: "sql-ai-developer",
    title: "Microsoft Certified: SQL AI Developer Associate",
    image: sqlAiDeveloperBadge,
  },
];

import powerAutomateLogo from "../assets/tools/a1.png";
import azureDataFactoryLogo from "../assets/tools/a2.png";
import fabricLogo from "../assets/tools/a3.png";
import powerBiLogo from "../assets/tools/a4.png";
import ssisLogo from "../assets/tools/a5.png";
import sqlServerLogo from "../assets/tools/a6.png";

// Tool logos shown in the hero section below the badges, in display order
// (same order as the LinkedIn banner). `ratio` is the logo's width share in
// the row, roughly its width/height, so all logos render at the same height.
const heroTools = [
  { key: "sql-server", title: "Microsoft SQL Server", image: sqlServerLogo, ratio: 1.25 },
  { key: "ssis", title: "SQL Server Integration Services", image: ssisLogo, ratio: 3.18 },
  { key: "power-bi", title: "Power BI", image: powerBiLogo, ratio: 0.74 },
  { key: "fabric", title: "Microsoft Fabric", image: fabricLogo, ratio: 0.9 },
  { key: "adf", title: "Azure Data Factory", image: azureDataFactoryLogo, ratio: 3.52 },
  { key: "power-automate", title: "Power Automate", image: powerAutomateLogo, ratio: 3.3 },
];

const certificationsData = [
  {
    key: "1",
    title: "Microsoft DP-600",
    imageUrl:
      "https://res.cloudinary.com/ddzwhzywn/image/upload/v1733590088/knlrfbhavxefjunh3ksu.png",
    text: "Certified in Microsoft Fabric with the Microsoft DP-600: Fabrics Data Analytics Associate. Skilled in designing, implementing, and optimizing data solutions for real-time analytics and business growth.",
    originalLink:
      "https://learn.microsoft.com/en-us/users/KeyurPatel-9440/credentials/F6B84DB5B5CE293B",
  },
  {
    key: "2",
    title: "Microsoft PL-300",
    imageUrl:
      "https://res.cloudinary.com/ddzwhzywn/image/upload/v1750582870/300_hnb7qg.png",
    text: "Certified in Microsoft Power BI with the Microsoft PL-300: Power BI Data Analyst Associate certification. Proficient in preparing, modeling, visualizing, and analyzing data to deliver actionable insights and support data-driven business decisions.",
    originalLink:
      "https://learn.microsoft.com/api/credentials/share/en-us/KeyurPatel-9440/390E979146857D80?sharingId=15AD0F0A10BEE80A",
  },
  {
    key: "3",
    title: "Microsoft DP-900",
    imageUrl:
      "https://res.cloudinary.com/ddzwhzywn/image/upload/v1750582888/900_bjhd4y.png",
    text: "Certified in Microsoft Azure Data Fundamentals with the Microsoft DP-900 certification. Knowledgeable in core data concepts, relational and non-relational data structures, analytics workloads, and foundational cloud data services on Microsoft Azure.",
    originalLink:
      "https://learn.microsoft.com/en-in/users/keyurpatel-9440/credentials/cc2373e10b8daefc",
  },
  {
    key: "4",
    title: "Microsoft DP-800",
    imageUrl: dp800Certificate,
    text: "Certified in Microsoft SQL AI Development with the Microsoft DP-800: SQL AI Developer Associate certification. Skilled in developing intelligent database solutions, integrating AI capabilities with SQL, and leveraging advanced data technologies to build efficient, scalable, and AI-powered applications.",
    originalLink:
      "https://learn.microsoft.com/en-us/users/KeyurPatel-9440/credentials/B9EA4C30F8ABBE36",
  },
];

export { certificationsData, heroBadges, heroTools };
