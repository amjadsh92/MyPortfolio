import Image from "next/image";

function Authentication() {
  return (
    <>
      <p className="font-sans font-semibold text-black text-base 3xs:text-lg 2xs:text-base xs:text-lg sm:text-xl md:text-2xl mt-8">
        {" "}
        Authentication
      </p>
      <p className="font-mono font-semibold text-black text-sm 3xs:text-base 2xs:text-sm xs:text-base sm:text-lg md:text-xl mt-8">
        If you clone the addAuthentication branch of the GitHub repositoy of
        this app, you will have the app with the authentication feature added to
        it. If you are not signed-in all pages will be protected which means
        that you can&apos;t access the pages of the app. You can either sign-in
        with your credentials or your GitHub account. Once you are signed-in,
        you will be directed to the Homepage, with your username and email shown
        there{" "}
      </p>
      <SignInPhoto />
      <SignInPhoto1 />
    </>
  );
}

export default Authentication;

function SignInPhoto() {
  return (
    <>
      <div className="mt-24">
        <p className="font-mono font-semibold text-black text-sm 3xs:text-base 2xs:text-sm xs:text-base sm:text-lg md:text-xl mb-4">
          So you can sign-in from the sign-in page
        </p>
        <Image
          src="/authentication.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </>
  );
}

function SignInPhoto1() {
  return (
    <>
      <div className="mt-24 pb-8">
        <p className="font-mono font-semibold text-black text-sm 3xs:text-base 2xs:text-sm xs:text-base sm:text-lg md:text-xl mb-4">
          When you sign-in you will be directed to the home-page with your
          username and email shown.{" "}
        </p>
        <Image
          src="/authentication2.png"
          width={600}
          height={600}
          alt="Picture of the author"
        />
        <p className="font-mono font-semibold text-black text-sm 3xs:text-base 2xs:text-sm xs:text-base sm:text-lg md:text-xl pt-8">
          When you logout, you will be redirected again to the sign-in page.
        </p>
      </div>
    </>
  );
}
