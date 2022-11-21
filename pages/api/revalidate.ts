export default async function handler(req: any, res: any) {

  try {

    await res.revalidate('/')
    return res.json({ revalidated: true })
  } catch (err) {

    return res.status(500).send('Error revalidating')
  }
}