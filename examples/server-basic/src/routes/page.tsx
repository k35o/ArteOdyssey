import { Counter } from './_parts/counter';
import { listEntries } from './_parts/guestbook';
import { GuestbookForm } from './_parts/guestbook-form';
import { leave } from './_parts/leave';

export default async function HomePage({
  request,
}: {
  request: { headers: Headers; cookies: ReadonlyMap<string, string> };
}) {
  // サーバーモードなのでリクエストごとに読み直される
  const entries = await listEntries();
  return (
    <>
      <h1 data-testid="title">home</h1>
      <p data-testid="rendered-at">rendered on the server</p>
      <p data-testid="request">
        {`visitor:${request.cookies.get('visitor') ?? '-'} language:${request.headers.get('accept-language') ?? '-'}`}
      </p>
      <Counter />
      <GuestbookForm />
      <form action={leave} data-testid="leave-form">
        <button type="submit">leave</button>
      </form>
      <ul data-testid="entries">
        {entries.map((name, index) => (
          <li key={`${name}-${String(index)}`}>{name}</li>
        ))}
      </ul>
    </>
  );
}
