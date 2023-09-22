import React from "react";
import Navigator from "./components/Navigator";
import ServiceRoutes from "./routes";
import { QueryProvider } from "@/contexts/QueryContext";

const Employees: React.FC = () => {
	return (
		<>
			<QueryProvider>
				<Navigator />
				<ServiceRoutes />
			</QueryProvider>
		</>
	);
};

export default Employees;
