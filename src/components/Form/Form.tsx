import './Form.scss';

interface FormProps {
  onChange: (newValues: {
    step: number;
    frameSize: number;
    itemWidth: number;
    animationDuration: number;
    infinite: boolean;
  }) => void;
  step: number;
  frameSize: number;
  itemWidth: number;
  animationDuration: number;
  infinite: boolean;
}

const Form: React.FC<FormProps> = ({
  onChange,
  step,
  frameSize,
  itemWidth,
  animationDuration,
  infinite,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    onChange({
      ...{ step, frameSize, itemWidth, animationDuration, infinite },
      [name]: type === 'checkbox' ? checked : +value,
    });
  };

  return (
    <form className="container">
      <label htmlFor="stepId" className="container__label">
        Step
        <input
          type="number"
          id="stepId"
          name="step"
          value={step}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="frameId" className="container__label">
        Frame Size
        <input
          id="frameId"
          type="number"
          name="frameSize"
          value={frameSize}
          min="1"
          max="10"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="itemId" className="container__label">
        Item Width
        <input
          id="itemId"
          type="number"
          name="itemWidth"
          value={itemWidth}
          min="0"
          onChange={handleChange}
        />
      </label>

      <label htmlFor="animationDurationId" className="container__label">
        Animation Duration
        <input
          id="animationDurationId"
          type="number"
          name="animationDuration"
          value={animationDuration}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="infiniteId" className="container__label">
        Infinity
        <input
          id="infiniteId"
          type="checkbox"
          name="infinite"
          onChange={handleChange}
          checked={infinite}
        />
      </label>
    </form>
  );
};

export default Form;