import { useState } from "react";
import styles from "./TodoList.module.css";

type ListType = {
  type: string;
  name: string;
};

const initialItems = [
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Vegetable",
    name: "Broccoli",
  },
  {
    type: "Vegetable",
    name: "Mushroom",
  },
  {
    type: "Fruit",
    name: "Banana",
  },
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Mango",
  },
  {
    type: "Fruit",
    name: "Pineapple",
  },
  {
    type: "Vegetable",
    name: "Cucumber",
  },
  {
    type: "Fruit",
    name: "Watermelon",
  },
  {
    type: "Vegetable",
    name: "Carrot",
  },
];

export default function TodoList() {
  const [itemsList, setItemsList] = useState(initialItems);
  const [fruitsList, setFruitsList] = useState<ListType[]>([]);
  const [vegetablesList, setVegetableList] = useState<ListType[]>([]);

  const onClickItem = (item: ListType) => {
    if (item.type === "Fruit") {
      setFruitsList((prev) => [...prev, item]);
    } else {
      setVegetableList((prev) => [...prev, item]);
    }

    setItemsList((prev) => prev.filter((i) => i.name !== item.name));

    setTimeout(() => {
      onRemoveItem(item);
    }, 5000);
  };

  const onRemoveItem = (item: ListType) => {
    if (item.type === "Fruit") {
      setFruitsList((prev) => prev.filter((i) => i.name !== item.name));
    } else {
      setVegetableList((prev) => prev.filter((i) => i.name !== item.name));
    }
    setItemsList((prev) => [...prev, item]);
  };

  const renderItemsList = () => {
    return itemsList.map((item, index) => {
      return (
        <div
          key={`item-${index}`}
          className={styles.card}
          onClick={() => onClickItem(item)}
        >
          {item.name}
        </div>
      );
    });
  };

  const renderFruitsList = () => {
    return fruitsList.map((fruit, index) => {
      return (
        <div
          key={`fruit-${index}`}
          className={styles.card}
          onClick={() => onRemoveItem(fruit)}
        >
          {fruit.name}
        </div>
      );
    });
  };

  const renderVegetableList = () => {
    return vegetablesList.map((vegetable, index) => {
      return (
        <div
          key={`vegetable-${index}`}
          className={styles.card}
          onClick={() => onRemoveItem(vegetable)}
        >
          {vegetable.name}
        </div>
      );
    });
  };

  const renderTodoList = (header: string) => {
    return (
      <div className={styles.list}>
        <div className={styles.header}>{header}</div>
        <div className={styles.content}>
          {header === "Fruit" ? renderFruitsList() : renderVegetableList()}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div>{renderItemsList()}</div>
      <div>{renderTodoList("Fruit")}</div>
      <div>{renderTodoList("Vegetable")}</div>
    </div>
  );
}
