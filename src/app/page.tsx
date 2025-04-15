import { auth0 } from "@/lib/auth0";
import './globals.css';

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <main className="home-container">
      {!session ? (
        <div className="button-group">
          <h1>Welcome 👋</h1>
          <a href="/auth/login?screen_hint=signup">
            <button className="btn btn-signup">Sign up</button>
          </a>
          <a href="/auth/login">
            <button className="btn btn-login">Log in</button>
          </a>
        </div>
      ) : (
        <div className="button-group">
          <h1>Welcome, {session.user.name}!</h1>
          <a href="/auth/logout">
            <button className="btn btn-logout">Log out</button>
          </a>
        </div>
      )}
    </main>
  );
}
