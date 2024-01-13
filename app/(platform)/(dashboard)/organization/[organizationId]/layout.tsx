import { OrgControl } from "./_components/orgControl";

const OrganizationIdLayout = ({ children } : { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}

export default OrganizationIdLayout;