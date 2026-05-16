import { Background } from "app/components/background"

export const metadata = {
  title: 'contact',
  description: 'contact me',
}

export default function Page() {
  return (
    <section>
      <Background />
      <h1 className="font-semibold font-mono text-2xl mb-8">contact</h1>
      <p className="mb-8 font-mono">
        {``}
      </p>
      <p className="mb-4 font-mono">
        {`noreply@jerryyf.dev`}
      </p>
    </section>

  )
}
