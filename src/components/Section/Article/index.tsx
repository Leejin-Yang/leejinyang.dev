import styles from './article.module.scss';

const content =
  '1234567890, 청춘을 갑 끓는 보라. 하는 청춘에서만 얼마나 할지라도 그것은 이상을 공자는 투명하되 청춘이 것이다. 같지 품으며, 뛰노는 우리 그들은 우리는 군영과 바로 대한 칼이다. 크고 풀이 것은 것이다. 같은 가장 보내는 황금시대다. 그림자는 대한 기쁘며, 열락의 때문이다. 만천하의 바이며, 그들에게 들어 청춘의 같이 보라. 아니더면, 곳이 불러 커다란 보라. 쓸쓸한 그들은 이상의 청춘은 물방아 때문이다. 같이, 인간은 불러 보배를 천하를 튼튼하며, 눈에 철환하였는가? 영원히 소리다.이것은 간에 것이다.\n\nLabore enim minus ipsam! Quia earum molestias ipsam obcaecati repudiandae temporibus illo enim, aut laudantium veritatis ipsa accusamus fuga debitis aspernatur hic.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum aspernatur, numquam dignissimos cumque dolore soluta? Odit unde optio excepturi doloribus quis tempore, aut ratione magnam, expedita atque modi eum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim minus ipsam! Quia earum molestias ipsam obcaecati repudiandae temporibus illo enim, aut laudantium veritatis ipsa accusamus fuga debitis aspernatur hic.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum aspernatur, numquam dignissimos cumque dolore soluta? Odit unde optio excepturi doloribus quis tempore, aut ratione magnam, expedita atque modi eum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim minus ipsam! Quia earum molestias ipsam obcaecati repudiandae temporibus illo enim, aut laudantium veritatis ipsa accusamus fuga debitis aspernatur hic.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum aspernatur, numquam dignissimos cumque dolore soluta? Odit unde optio excepturi doloribus quis tempore, aut ratione magnam, expedita atque modi eum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim minus ipsam! Quia earum molestias ipsam obcaecati repudiandae temporibus illo enim, aut laudantium veritatis ipsa accusamus fuga debitis aspernatur hic.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum aspernatur, numquam dignissimos cumque dolore soluta? Odit unde optio excepturi doloribus quis tempore, aut ratione magnam, expedita atque modi eum.\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim minus ipsam! Quia earum molestias ipsam obcaecati repudiandae temporibus illo enim, aut laudantium veritatis ipsa accusamus fuga debitis aspernatur hic.\n\n Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus earum aspernatur, numquam dignissimos cumque dolore soluta? Odit unde optio excepturi doloribus quis tempore, aut ratione magnam, expedita atque modi eum.\n\n';

const Article = () => {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>제목</h3>
      <p className={styles.date}>10.10.2022</p>
      <p className={styles.content}>{content}</p>
    </article>
  );
};

export default Article;
