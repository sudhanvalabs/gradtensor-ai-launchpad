interface BuiltForPanelProps {
  label?: string;
  items: string[];
}

const BuiltForPanel = ({ label = "Built for", items }: BuiltForPanelProps) => (
  <div className="tp-who">
    <div className="tp-who-label">{label}</div>
    <div className="tp-who-list">
      {items.map((item) => (
        <div key={item} className="tp-who-item">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default BuiltForPanel;
