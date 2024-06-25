import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getReadBookList } from "../../Utility/LocalStorage";
import { useLoaderData } from "react-router-dom";

const PagesToRead = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
  };

  const TriangleBar = ({ fill, x, y, width, height }) => {
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const AllList = useLoaderData();
  const [ReadBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedReadBookIds = getReadBookList(); // Assuming this gets IDs from localStorage

    // Filter AllList to include only items whose IDs are in storedReadBookIds
    const filteredBooks = AllList.filter(item => storedReadBookIds.includes(item.bookId.toString()));

    setReadBooks(filteredBooks); // Set filtered books to state
  }, []);

  return (
    <div className="w-1/3 md:w-1/2 md:mx-auto md:p-16">
      <BarChart
        width={400} md:width={500}
        height={350}
        data={ReadBooks}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="bookName"
          tick={{ fontSize: 12 }}
          label={{ value: "Book Name", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          dataKey="totalPages"
          tick={{ fontSize: 12 }}
          label={{ value: "Total Pages", angle: -90, position: "insideLeft" }}
        />
        <Bar
          dataKey="totalPages"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {ReadBooks.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

PagesToRead.propTypes = {
  fill: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default PagesToRead;
