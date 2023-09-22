import React from "react";
import ServiceRoutes from "./routes";
import { QueryProvider } from "@/contexts/QueryContext";

const Employees: React.FC = () => {
	return (
		<>
			<QueryProvider>
				<ServiceRoutes />
			</QueryProvider>
		</>
	);
};

export default Employees;
