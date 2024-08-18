import { signOut } from "@/actions/auth";

export default function My() {

  return (
    <>
    <form action={signOut}>
        <button type="submit">logout</button>
    </form>
    </>
  );
}