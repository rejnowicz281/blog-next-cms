import DashboardNavbar from "@components/shared/DashboardNavbar";

export default function DashboardLayout({ children }) {
    return (
        <>
            <DashboardNavbar />
            {children}
        </>
    );
}
