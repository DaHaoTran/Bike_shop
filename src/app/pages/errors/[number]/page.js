export async function generateStaticParams() {
  return [{ number: '404' }, { number: '500' }]
}

import Error from "../../../components/error"

export default function Page({ params }) {
  return <Error number={params.number} />
}