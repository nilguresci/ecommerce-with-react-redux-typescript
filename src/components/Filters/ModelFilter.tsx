import { Card, Checkbox, Input } from "antd";
import { useEffect, useState } from "react";
import style from "./filters.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../models/product";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { setSelectedModels } from "../../store/productSlice";
import { SearchOutlined } from "@ant-design/icons";

const ModelFilter = () => {
  const dispatch = useDispatch<any>();
  const [models, setModels] = useState<string[]>([]);
  const stateProducts: Product[] = useSelector(
    (state: any) => state.products.products
  );
  const stateSelectedBrands: string[] = useSelector(
    (state: any) => state.products.selectedBrands
  );

  const stateSelectedModels: string[] = useSelector(
    (state: any) => state.products.selectedModels
  );

  const onChange = (checkedValues: CheckboxValueType[]) => {
    dispatch(setSelectedModels(checkedValues));
  };

  const filterModels = () => {
    if (stateSelectedBrands.length > 0) {
      let models = stateProducts
        .filter((product) => stateSelectedBrands.includes(product.brand))
        .map((p) => p.model);
      setModels([...new Set(models)]);
    } else {
      let models = stateProducts.map((product) => product.model);
      setModels([...new Set(models)]);
    }
  };

  const clearModels = () => {
    const selectedModels = stateSelectedModels.filter((model) =>
      models.includes(model)
    );
    dispatch(setSelectedModels(selectedModels));
  };

  const onSearch = (e: any) => {
    if (e.target.value !== "") {
      let searcFilteredModels = models.filter((model) =>
        model.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setModels([...new Set(searcFilteredModels)]);
    } else {
      filterModels();
    }
  };

  useEffect(() => {
    filterModels();
  }, [stateProducts, stateSelectedBrands]);

  useEffect(() => {
    clearModels();
  }, [models]);

  return (
    <div className={style.filterCard}>
      <div className={style.filterName}>Model</div>
      <Card
        style={{ width: 230 }}
        className={style.card}
        bodyStyle={{ display: "flex", flexDirection: "column" }}
      >
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search"
          bordered={false}
          onChange={(e: any) => onSearch(e)}
        ></Input>

        {models.length > 0 ? (
          <Checkbox.Group
            className={style.sortRadioGroup}
            options={models}
            onChange={onChange}
            value={stateSelectedModels}
          />
        ) : (
          <></>
        )}
      </Card>
    </div>
  );
};

export default ModelFilter;
