import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <span>HMR issue with OverlayProvider</span>
        <input type="text" className="p-2" placeholder="Type something here" />
      </div>
    </main>
  );
}
