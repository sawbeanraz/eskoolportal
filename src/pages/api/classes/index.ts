import { NextApiHandler } from 'next';
import { Class } from '~/database/entities/Class';
import { secureRoute } from '~/lib/secureRoute';

const handler: NextApiHandler = async (_, res) => {
  const classes = await Class.find();

  res.status(200).json(classes);
};

export default secureRoute(handler);
