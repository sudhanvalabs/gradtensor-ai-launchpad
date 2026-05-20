export interface ProductCardMeta {
  label: string;
  value: string;
}

interface ProductCardProps {
  level: string;
  levelName: string;
  name: string;
  description: string;
  includes: string;
  deliveredThrough?: string;
  meta: ProductCardMeta[];
  variant?: "default" | "flagship";
}

const ProductCard = ({
  level,
  levelName,
  name,
  description,
  includes,
  deliveredThrough,
  meta,
  variant = "default",
}: ProductCardProps) => {
  const className =
    variant === "flagship" ? "tp-product tp-flagship" : "tp-product";

  return (
    <div className={className}>
      <div className="tp-p-level">
        <div className="tp-p-level-num">{level}</div>
        <div className="tp-p-level-name">{levelName}</div>
      </div>
      <div className="tp-p-content">
        <div className="tp-p-name">{name}</div>
        <p className="tp-p-desc">{description}</p>
        <div className="tp-p-includes">{includes}</div>
        {deliveredThrough && (
          <div className="tp-p-delivered">{deliveredThrough}</div>
        )}
      </div>
      <div className="tp-p-meta">
        {meta.map((row) => (
          <div key={row.label} className="tp-p-meta-row">
            <span>{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
