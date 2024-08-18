import { SubmitButton } from "./components/SubmitButton";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import KakaoLoginBtn from "./components/KakaoLoginBtn";

export default function Login({ searchParams }: {
  searchParams: { message: string };
}) {

  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log(email, password)
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  const kakaoLogin = async (formData: FormData) => {
    "use server";
    const supabase = createClient();
    const { data ,error } = await supabase.auth.signInWithOAuth({
        provider: 'kakao',
    });


    return redirect("/");
  };

  return (
      <div className="w-screen h-screen text-center content-center">
          <h1 className="text-5xl mb-10">L O G I N</h1>
          <form className="w-full max-w-80 mx-auto py-14 px-5 flex flex-col gap-2 border-1 border-sub">
            <input type="text" name="email" className="w-full bg-main outline-none border-b-1 border-sub focus:border-purewhite" placeholder="email"/>
            <input type="password" name="password" className="w-full bg-main outline-none border-b-1 border-sub focus:border-purewhite mb-10" placeholder="password"/>
            <SubmitButton formAction={signIn} pendingText="Signing In..."  className="bg-purewhite text-black font-bold rounded-md py-1">Sign in</SubmitButton>
            <SubmitButton formAction={signUp} pendingText="Signing Up..."  className="border-1 border-sub rounded-md py-1 hover:border-subhover">Sign up</SubmitButton>
            {searchParams?.message && (
              <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                {searchParams.message}
              </p>
            )}
          </form>
      </div>
  );
}