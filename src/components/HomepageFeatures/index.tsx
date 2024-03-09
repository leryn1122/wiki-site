import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cloud Native and DevOps',
    Svg: require('@site/static/img/wheelchair-working.svg').default,
    description: (
      <>
        Working as a Kubernetes native SRE and DevOps engineer.<br />
        Served for manufacture and financial for years.
      </>
    ),
  },
  {
    title: 'Documentation and Sharing',
    Svg: require('@site/static/img/teamwork-brainstorm.svg').default,
    description: (
      <>
        Documentation based on working experiences.<br />
        Sharing knowledges and build opensource projects.
      </>
    ),
  },
  {
    title: 'Focus on New Solutions',
    Svg: require('@site/static/img/goal-aim-target.svg').default,
    description: (
      <>
        Pursuing new technologies and developing solutions.<br />
        Eager to explore better practice.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
