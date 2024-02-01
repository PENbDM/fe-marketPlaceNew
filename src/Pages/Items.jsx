import * as React from "react";
import { useState, useEffect } from "react";
import ItemCard from "../components/Items/ItemCard";
import axios from "axios";
import SelectSmallSort from "../components/Items/SelectSort";
import SelectSmallCategory from "../components/Items/SelectCategory";
import AddItemDialog from "../components/Items/AddItemDialog";
import Header from "../components/Header/Header";
export default function ItemsPage() {
  const [shopItems, setShopItems] = useState([]);
  const [sortCategory, setSortCategory] = useState("");
  const [sort, setSortMethod] = React.useState(``);
  const [itemIsSubmitted, setItemIsSubmitted] = useState(false);
  const [catSortedItems, setCatSortedItems] = useState(null);
  console.log(shopItems);
  useEffect(() => {
    const fetchItems = async () => {
      const data = await axios.get(
        "https://nc-marketplace-sem-1.onrender.com/api/items"
      );
      const { items } = data.data;
      setShopItems(items);
    };
    fetchItems();
  }, [itemIsSubmitted]);

  const sortByCategory = (arr) =>
    arr
      .filter((item) => item.category_name === sortCategory)
      .map((item) => <ItemCard key={item.item_id} item={item} />);

  const sortByType = (arr) => arr.sort((a, b) => a[sort] - b[sort]);

  return (
    <>
    <Header/>
      <section className="h-full ">
        <div className="p-24">
          <h2 className="text-center text-2xl">Items</h2>
          <div className="flex justify-between items-center my-3 flex-col sm:flex-row ">
            <div className="ml-1">
              <AddItemDialog setItemIsSubmitted={setItemIsSubmitted} />
            </div>
            <div>
              <SelectSmallCategory setSortCategory={setSortCategory} />
              <SelectSmallSort sort={sort} setSortMethod={setSortMethod} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {sortCategory
              ? sortByCategory(shopItems)
              : shopItems.map((item) => (
                  <ItemCard key={item.item_id} item={item} />
                ))}
          </div>
        </div>
      </section>
    </>
  );
}
