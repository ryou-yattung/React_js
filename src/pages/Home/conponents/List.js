import Item from "./Item";

// const arr = [1, 2, 3];
// const arr = ["aaa", "bbb", "ccc"];

const List = ({ listDate, deletDate }) => {
  console.log("listDate", listDate);
  return (
    <div className="list">
      {listDate.map((item) => {
        const { note, time, date, id } = item;
        return (
          <Item
            key={id}
            note={note}
            time={time}
            date={date}
            deletDate={deletDate}
          />
        );
      })}

      {/* {
               arr.map(item =><Item />)
               // arr.map(item => <div>{item}</div> )
          } */}
    </div>
  );
};
export default List;
