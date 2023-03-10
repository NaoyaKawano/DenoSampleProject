import { Head } from "$fresh/runtime.ts";
import FooterComponent from "../components/FooterComponent.tsx";
import HeaderComponent from "../components/HeaderComponent.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>色々改造してみるテスト</title>
      </Head>

      {/* ヘッダー */}
      <HeaderComponent />

      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>

      {/* フッター */}
      <FooterComponent />
    </>
  );
}
