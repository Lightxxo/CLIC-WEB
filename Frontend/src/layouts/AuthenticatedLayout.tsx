import{ useFormContext } from "@/contexts/FormContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthenticatedLayout() {
  const {data} = useFormContext();
  return (<div>
    {!data.loading && <>{data.token ? <Outlet /> : <Navigate to="/login" replace />}</>}
  </div>);
}
