const aboutContent = {
  description: `As a Data Analyst at Inkey IT Solutions Pvt. Ltd., Keyur specializes in unlocking the potential of data for business growth. He leverages advanced analytics and visualization techniques to empower organizations with actionable insights. He has a Bachelor of Engineering degree in Information Technology from Gujarat Technological University.
    Keyur has good knowledge and experience in working with ETL technologies like ADF and SSIS, as well as version control systems like GitHub and Azure DevOps.
    He has also conducted informative sessions on these topics in his organization.
    He is well-versed in Fabric, a low-code development platform that enables rapid application development.
    He has written several technical blogs and contributed to the open-source community of Power BI and Fabric. Keyur is passionate about harnessing the power of data and learning new technologies.`,
  personalInfo: [
    { label: "Name", value: "Keyur Patel" },
    { label: "Job Role", value: "Data Analyst" },
    { label: "Experience", value: "3+ Years" },
    { label: "Address", value: "Bharuch, Gujarat, India (Currently in Surat)" },
  ],
  additionalInfo: [
    { label: "Profile", value: "Data Analytics & Data Science" },
    {
      label: "Domain",
      value:
        "Retail, E-Commerce, Trading, Logistics, Finance, Automobile, Health Care, Oil & Gas",
    },
    { label: "Education", value: "Bachelor of Engineering" },
    { label: "Language", value: "English, Hindi, Gujarati" },
    {
      label: "Top Skills",
      value:
        "Microsoft SQL Server, Microsoft Power BI, SQL Server Integration Services (SSIS), Azure Data Factory, Microsoft Fabric, Microsoft Excel",
    },
    {
      label: "Other Skills",
      value:
        "Python, Pyspark, Azure Data Bricks, Microsoft Power Automate, Azure DevOps, Git/Github",
    },
    {
      label: "Interest",
      value:
        "Traveling, Content Creation, Passionate about latest tech updates and gadgets, Expert in exploring food cuisines, Mad at cricket and bikes",
    },
  ],
};

const skills = [
  { name: "Microsoft SQL Server", level: "95%" },
  { name: "Microsoft Power BI", level: "95%" },
  { name: "Microsoft SQL Server Integration Services", level: "85%" },
  { name: "Azure Data Factory", level: "80%" },
  { name: "Python", level: "80%" },
];

const profileImage =
  "https://res.cloudinary.com/ddzwhzywn/image/upload/v1732431717/hkv6kkxuzspynoq2fks0.png";

const projectsCompleted = 8;

const linkedinUrl =
  "https://www.linkedin.com/in/keyurpatel1761?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRDzQJXKLT7WAA%2BFqW15eKw%3D%3D";

import resume from "../assets/Keyur Patel Latest Resume.pdf";

const buttonsData = [
  {
    key: "1",
    buttonText: "LinkedIn",
    url: linkedinUrl,
    download: false,
  },
  {
    key: "2",
    buttonText: "Download CV",
    url: resume,
    download: true,
  },
];

export {
  aboutContent,
  skills,
  profileImage,
  projectsCompleted,
  linkedinUrl,
  resume,
  buttonsData,
};
