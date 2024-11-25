import React from "react";

interface Params {
  id: string;
}

interface IBook {
  id: number;
  name: string;
  author: string;
  type: string;
  price: number;
  available: boolean;
}

const Page = async ({ params }: { params: Params }): Promise<JSX.Element> => {
  const { id } = params;

  const res = await fetch(`https://simple.books-api.glitch.me/books/${id}`);
  const data: IBook = await res.json();
  console.log(data);
  
  return (
    <div>
      <h1 className="bg-red-400">Id: {id}</h1>
      <h2>Author: {data.author}</h2>
    </div>
  );
};

export default Page;
