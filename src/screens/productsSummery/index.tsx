import { useDispatch, useSelector } from "react-redux";
import { changePriceRange } from "../../store/cart/actions";
import { RootState } from "../../store/rootReducer";
import { Table, Container, Input } from "./styles";
import { Product as ProductModel } from "../../entities/Product";

export const PriceSummery = (
  productsList: ProductModel[],
  min: number,
  max: number
) => {
  const productCount = productsList.filter(function (o: { price: number }) {
    const count = o.price <= max && o.price >= min;
    return count;
  });
  const Total = productCount.reduce(
    (accumulator: any, current: { totalPrice: any }) =>
      accumulator + current.totalPrice,
    0
  );

  return (
    <>
      <th>Products counts</th>
      <td className="price">{productCount.length}</td>
      <th>Total Price</th>
      <td className="price">{Total}</td>
    </>
  );
};

const Summery = ({ productsList }: { productsList: ProductModel[] }) => {
  const dispatch = useDispatch();
  const { productRange } = useSelector((state: RootState) => state.cart);

  const onChangeText = (
    value: string,
    id: number,
    type: string,
    currentValue: number
  ) => {
    const valueFormat = parseInt(value);
    const dataSet = {
      id: id,
      minPrice: type === "min" ? valueFormat : currentValue,
      maxPrice: type === "max" ? valueFormat : currentValue,
    };
    dispatch(changePriceRange(dataSet));
  };

  return (
    <Container>
      <Table>
        <thead>
          {productRange.map(({ id, maxPrice, minPrice }) => {
            return (
              <tr key={id}>
                <th>Price Range</th>
                <td className="price">
                  <label className="price">
                    <Input
                      value={minPrice}
                      onChange={(e: { target: { value: string } }) =>
                        onChangeText(e.target.value, id, "min", maxPrice)
                      }
                    />
                  </label>
                </td>
                <td className="price">
                  <label className="price">
                    <Input
                      value={maxPrice}
                      onChange={(e: { target: { value: string } }) =>
                        onChangeText(e.target.value, id, "max", minPrice)
                      }
                    />
                  </label>
                </td>
                {PriceSummery(productsList, minPrice, maxPrice)}
              </tr>
            );
          })}
        </thead>
      </Table>
    </Container>
  );
};

export default Summery;
