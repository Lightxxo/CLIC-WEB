// components/MultiPartForm/UserCredentials.tsx

import { Input } from "@/components/ui/input";
import { useFormContext } from "@/contexts/FormContext";

export default function UserCredentials() {
  const { data, setData } = useFormContext();

  return (
    <div className="space-y-3">
      <Input
        placeholder="First Name"
        value={data.firstName}
        onChange={(e) => setData({ ...data, firstName: e.target.value })}
      />
      <Input
        placeholder="Last Name"
        value={data.lastName}
        onChange={(e) => setData({ ...data, lastName: e.target.value })}
      />
      <select
        value={data.gender}
        onChange={(e) => setData({ ...data, gender: e.target.value })}
        className="w-full border rounded-md p-2 focus:outline-none focus:ring"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}
