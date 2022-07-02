import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FoodContainerStyled, ItemStyled, ButtonStyled } from './Food.styles';
import { getBurgers, getWildfowl, getSteaks } from 'api/shops';
import actions from 'redux/card/actions';
import { useDispatch } from 'react-redux';

const Food = ({ shop }) => {
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async axios => {
      await axios().then(data => setMenu(data));
    };
    if (shop === 'Burger') {
      fetchData(getBurgers);
    }

    if (shop === 'Wildfowl') {
      fetchData(getWildfowl);
    }

    if (shop === 'Steak') {
      fetchData(getSteaks);
    }
  }, [shop]);

  const onClickHandler = (id, name, price, img) => {
    dispatch(actions.add(id, name, price, img));
  };

  return (
    <>
      <Helmet>
        <title>{shop} page</title>
      </Helmet>
      <FoodContainerStyled>
        <ul className="list">
          {menu &&
            menu.map(eat => (
              <ItemStyled key={eat._id}>
                <article>
                  <img src={eat.img} alt="img" />
                  <p>
                    {eat.name} {eat.price} UAH
                  </p>
                  <ButtonStyled
                    type="button"
                    onClick={() =>
                      onClickHandler(eat._id, eat.name, eat.price, eat.img)
                    }
                  >
                    add to Cart
                  </ButtonStyled>
                </article>
              </ItemStyled>
            ))}
        </ul>
      </FoodContainerStyled>
    </>
  );
};

export default Food;
