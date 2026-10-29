import DashboardPanel from "@/src/shared/components/dashboard/DashboardPanel";

export default async function DashboardLayout(
    { children }: Readonly<{ children: React.ReactNode }>
) {

    return (
        <>
            <div>
                <DashboardPanel />
                <main className=" py-10 lg:p1-72 md">
                    <div className=" px-4 sm:px-6 ls:px-8 max-w-4xl mx-auto ">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
} 
