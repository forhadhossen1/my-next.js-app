import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {

  return (
    <div>
      <h1>Hello world Next js</h1>
      <Counter/>
      <Link href="/news">
      <button className="btn btn-secondary">News</button>
      </Link>

      <Link href="/products">
      <button className="btn btn-secondary">Products</button>
      </Link>
    </div>
  );
};

export default HomePage;