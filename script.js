const projects = [
  { name: "TabNet 表格深度学习", category: "机器学习与表格建模", level: "中等", intro: "使用注意力机制在表格数据上选择关键特征，可与随机森林、XGBoost 等模型比较准确率、特征重要性和训练成本。", link: "https://github.com/dreamquark-ai/tabnet" },
  { name: "AutoGluon 自动机器学习", category: "机器学习与表格建模", level: "挑战", intro: "自动完成模型选择、集成和调参，适合研究 AutoML 与人工建模在表格分类或回归任务上的性能差异。", link: "https://github.com/autogluon/autogluon/tree/master/examples/tabular" },
  { name: "Optuna 贝叶斯超参数优化", category: "机器学习与表格建模", level: "中等", intro: "使用自动化搜索优化学习率、树深、正则化等超参数，并分析搜索预算、目标函数和参数敏感性。", link: "https://github.com/optuna/optuna-examples" },
  { name: "ElasticNet 回归", category: "机器学习与表格建模", level: "中等", intro: "结合 L1 与 L2 正则化，在稀疏特征和相关特征并存的数据中分析模型稳定性、特征筛选与预测误差。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNet.html" },
  { name: "SHAP 模型解释", category: "可解释人工智能", level: "中等", intro: "使用 Shapley 值解释模型预测，展示全局特征重要性、局部样本解释和错误样本的原因分析。", link: "https://shap.readthedocs.io/en/latest/example_notebooks.html" },
  { name: "LIME 局部可解释模型", category: "可解释人工智能", level: "中等", intro: "在单个样本附近拟合可解释代理模型，比较文本、图像或表格任务中局部解释的稳定性。", link: "https://github.com/marcotcr/lime/tree/master/doc/notebooks" },
  { name: "Explainable Boosting Machine", category: "可解释人工智能", level: "中等", intro: "训练可解释的广义加性模型，分析每个特征对预测的贡献曲线，并与黑盒模型进行性能对比。", link: "https://github.com/interpretml/interpret" },
  { name: "CRF 序列标注", category: "自然语言处理", level: "中等", intro: "使用条件随机场完成分词、词性标注或实体识别，重点分析转移特征、上下文模板和实体级 F1。", link: "https://sklearn-crfsuite.readthedocs.io/en/latest/tutorial.html" },
  { name: "Siamese Network 度量学习", category: "深度学习", level: "挑战", intro: "训练双塔网络判断样本相似度，可用于人脸验证、签名验证或图像匹配，并分析阈值选择。", link: "https://keras.io/examples/vision/siamese_network/" },
  { name: "Triplet Loss 图像检索", category: "深度学习", level: "挑战", intro: "使用锚点、正样本和负样本学习嵌入空间，完成相似图像检索并评估 Recall@K。", link: "https://github.com/adambielski/siamese-triplet" },
  { name: "Grad-CAM 类激活可视化", category: "可解释人工智能", level: "中等", intro: "为 CNN 分类结果生成热力图，观察模型关注区域，并结合失败案例分析模型是否依赖错误线索。", link: "https://github.com/jacobgil/pytorch-grad-cam" },
  { name: "随机森林", category: "机器学习与表格建模", level: "中等", intro: "集成多棵决策树进行投票或平均，可研究 Bootstrap、随机特征选择、树数量和特征重要性。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html" },
  { name: "极端随机树（Extra Trees）", category: "机器学习与表格建模", level: "中等", intro: "在随机森林基础上增加划分随机性，适合比较模型方差、训练速度和特征重要性稳定程度。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.ExtraTreesClassifier.html" },
  { name: "梯度提升树（Gradient Boosting）", category: "机器学习与表格建模", level: "中等", intro: "通过逐步拟合残差构建强模型，可观察学习率、弱学习器数量和最大深度对性能的影响。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html" },
  { name: "直方图梯度提升树", category: "机器学习与表格建模", level: "中等", intro: "使用直方图加速梯度提升训练，适合中等规模表格数据，并可比较训练时间与预测性能。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.HistGradientBoostingClassifier.html" },
  { name: "AdaBoost 分类", category: "机器学习与表格建模", level: "中等", intro: "通过提升错分样本权重组合弱分类器，可分析弱学习器数量、噪声样本和分类边界变化。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.AdaBoostClassifier.html" },
  { name: "Bagging 集成", category: "机器学习与表格建模", level: "中等", intro: "对同类基学习器进行有放回采样训练，研究样本扰动如何降低方差并提升泛化能力。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.BaggingClassifier.html" },
  { name: "XGBoost 梯度提升", category: "机器学习与表格建模", level: "挑战", intro: "实现高性能梯度提升树模型，适合表格数据竞赛任务，并分析正则化、树深、学习率和早停策略。", link: "https://github.com/dmlc/xgboost/tree/master/demo" },
  { name: "LightGBM 梯度提升", category: "机器学习与表格建模", level: "挑战", intro: "使用基于直方图和叶子优先生长的提升树框架，适合大规模表格数据分类、回归和排序任务。", link: "https://github.com/microsoft/LightGBM/tree/master/examples/python-guide" },
  { name: "CatBoost 类别特征提升树", category: "机器学习与表格建模", level: "挑战", intro: "面向类别变量友好的梯度提升框架，适合研究类别编码、排序提升和过拟合控制。", link: "https://github.com/catboost/catboost/tree/master/catboost/tutorials" },
  { name: "HDBSCAN 层次密度聚类", category: "无监督学习", level: "中等", intro: "在不同密度簇上进行层次密度聚类，适合分析噪声点、稳定簇和最小簇大小对结果的影响。", link: "https://github.com/scikit-learn-contrib/hdbscan" },
  { name: "Mean Shift 均值漂移聚类", category: "无监督学习", level: "中等", intro: "通过密度峰值移动自动寻找聚类中心，可研究带宽参数、簇数量和非球形数据的表现。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.cluster.MeanShift.html" },
  { name: "DBSCAN 密度聚类", category: "无监督学习", level: "中等", intro: "基于密度发现任意形状簇并识别噪声点，可分析 eps、min_samples 和数据尺度的敏感性。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.cluster.DBSCAN.html" },
  { name: "OPTICS 聚类", category: "无监督学习", level: "中等", intro: "在不同密度数据上扩展 DBSCAN 思想，适合展示可达距离曲线和簇结构层次。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.cluster.OPTICS.html" },
  { name: "BIRCH 大规模聚类", category: "无监督学习", level: "中等", intro: "使用 CF Tree 对大规模数据进行增量聚类，适合比较阈值、分支因子和聚类压缩效果。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.cluster.Birch.html" },
  { name: "谱聚类", category: "无监督学习", level: "中等", intro: "利用图拉普拉斯矩阵的特征向量完成聚类，适合非凸簇结构和相似度图构建实验。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralClustering.html" },
  { name: "高斯混合模型（GMM）", category: "无监督学习", level: "中等", intro: "用多个高斯分布表示数据生成过程，可完成软聚类并分析 EM 算法、协方差形式和 BIC 选模。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.mixture.GaussianMixture.html" },
  { name: "稀疏 PCA", category: "无监督学习", level: "中等", intro: "在主成分载荷中引入稀疏约束，适合分析可解释降维、特征选择和重构误差之间的平衡。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.SparsePCA.html" },
  { name: "核 PCA", category: "无监督学习", level: "中等", intro: "通过核技巧进行非线性降维，适合比较线性 PCA 与 RBF 核 PCA 在弯曲流形数据上的差异。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.KernelPCA.html" },
  { name: "非负矩阵分解（NMF）", category: "无监督学习", level: "中等", intro: "将非负数据分解为部件表示，适合文本主题、图像局部特征和推荐矩阵解释。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.NMF.html" },
  { name: "独立成分分析（ICA）", category: "无监督学习", level: "中等", intro: "从混合信号中恢复相互独立的源信号，可用于盲源分离、语音混合和脑电信号分析。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.FastICA.html" },
  { name: "t-SNE 可视化", category: "无监督学习", level: "中等", intro: "将高维样本映射到二维或三维空间，重点展示局部邻域保持、困惑度和随机种子的影响。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.manifold.TSNE.html" },
  { name: "UMAP 降维", category: "无监督学习", level: "中等", intro: "基于流形学习进行高维数据可视化，可比较 n_neighbors、min_dist 和距离度量对嵌入结果的影响。", link: "https://github.com/lmcinnes/umap/tree/master/notebooks" },
  { name: "LDA 主题模型", category: "自然语言处理", level: "中等", intro: "从文档集合中发现潜在主题，适合新闻、论文摘要或评论语料的主题提取和主题词解释。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.LatentDirichletAllocation.html" },
  { name: "Isolation Forest 异常检测", category: "异常检测", level: "中等", intro: "通过随机切分隔离异常点，适合欺诈检测、设备故障和网络异常等无监督异常检测任务。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html" },
  { name: "局部离群因子（LOF）", category: "异常检测", level: "中等", intro: "比较样本局部密度差异发现异常点，可分析邻居数量、污染率和局部稀疏区域误报问题。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.LocalOutlierFactor.html" },
  { name: "单类支持向量机", category: "异常检测", level: "中等", intro: "只使用正常样本学习边界，适合检测偏离正常分布的异常数据，并分析核函数和 nu 参数。", link: "https://scikit-learn.org/stable/modules/generated/sklearn.svm.OneClassSVM.html" },
  { name: "FP-Growth 频繁模式挖掘", category: "数据挖掘", level: "中等", intro: "使用 FP-Tree 高效挖掘频繁项集，适合与 Apriori 思路比较搜索空间、支持度和运行时间。", link: "https://rasbt.github.io/mlxtend/user_guide/frequent_patterns/fpgrowth/" },
  { name: "PrefixSpan 序列模式挖掘", category: "数据挖掘", level: "中等", intro: "从用户行为、点击流或学习轨迹中挖掘频繁序列，分析最小支持度和序列长度对模式数量的影响。", link: "https://github.com/chuanconggao/PrefixSpan-py" },
  { name: "MLP-Mixer 图像分类", category: "计算机视觉", level: "挑战", intro: "不使用卷积和注意力，仅通过 MLP 混合空间与通道信息，适合与 CNN、ViT 做结构对比。", link: "https://keras.io/examples/vision/mlp_image_classification/" },
  { name: "Swin Transformer 图像分类", category: "计算机视觉", level: "挑战", intro: "使用层次化窗口注意力处理图像，适合分析窗口大小、层级特征和迁移学习效果。", link: "https://github.com/microsoft/Swin-Transformer" },
  { name: "ConvNeXt 图像分类", category: "计算机视觉", level: "挑战", intro: "将现代 Transformer 设计思想融入卷积网络，适合与 ResNet、ViT 比较准确率、参数量和推理速度。", link: "https://github.com/facebookresearch/ConvNeXt" },
  { name: "ResNet 残差网络", category: "计算机视觉", level: "中等", intro: "通过残差连接缓解深层网络退化问题，适合比较普通 CNN 与残差网络的训练曲线。", link: "https://github.com/pytorch/vision/blob/main/torchvision/models/resnet.py" },
  { name: "DenseNet 密集连接网络", category: "计算机视觉", level: "中等", intro: "用特征复用和密集连接提升梯度传播效率，可分析参数量、特征拼接和分类表现。", link: "https://github.com/pytorch/vision/blob/main/torchvision/models/densenet.py" },
  { name: "EfficientNet 图像分类", category: "计算机视觉", level: "中等", intro: "通过复合缩放平衡网络深度、宽度和分辨率，适合研究模型规模与准确率的关系。", link: "https://github.com/pytorch/vision/blob/main/torchvision/models/efficientnet.py" },
  { name: "Vision Transformer（ViT）", category: "计算机视觉", level: "挑战", intro: "把图像切分为 patch 并使用 Transformer 编码，适合比较 CNN 与自注意力模型的图像分类效果。", link: "https://github.com/pytorch/vision/blob/main/torchvision/models/vision_transformer.py" },
  { name: "卷积自编码器", category: "深度学习", level: "中等", intro: "通过编码器和解码器重构输入图像，可用于降噪、压缩和异常检测，并分析重构误差。", link: "https://keras.io/examples/vision/autoencoder/" },
  { name: "变分自编码器（VAE）", category: "生成模型", level: "挑战", intro: "学习潜在变量分布并生成新样本，适合展示重参数化技巧、KL 散度和生成样本质量。", link: "https://keras.io/examples/generative/vae/" },
  { name: "DCGAN 图像生成", category: "生成模型", level: "挑战", intro: "使用生成器和判别器对抗训练生成图像，可分析模式崩塌、训练不稳定和可视化生成过程。", link: "https://www.tensorflow.org/tutorials/generative/dcgan" },
  { name: "WGAN-GP 图像生成", category: "生成模型", level: "挑战", intro: "引入 Wasserstein 距离和梯度惩罚改善 GAN 稳定性，适合与 DCGAN 做生成质量对比。", link: "https://keras.io/examples/generative/wgan_gp/" },
  { name: "CycleGAN 图像风格迁移", category: "生成模型", level: "挑战", intro: "在无配对图像数据上学习域转换，可实现马与斑马、照片与绘画等风格迁移任务。", link: "https://www.tensorflow.org/tutorials/generative/cyclegan" },
  { name: "神经风格迁移", category: "生成模型", level: "中等", intro: "利用卷积网络特征分离内容和风格，生成具有目标艺术风格的图像，并分析内容损失与风格损失权重。", link: "https://www.tensorflow.org/tutorials/generative/style_transfer" },
  { name: "Faster R-CNN 目标检测", category: "计算机视觉", level: "挑战", intro: "完成候选区域生成、分类和边框回归，可在自定义小数据集上训练检测模型并评估 mAP。", link: "https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html" },
  { name: "YOLO 实时目标检测", category: "计算机视觉", level: "挑战", intro: "使用单阶段检测器完成实时目标识别，适合分析精度、速度、置信度阈值和漏检误检案例。", link: "https://github.com/ultralytics/ultralytics" },
  { name: "U-Net 医学图像分割", category: "计算机视觉", level: "中等", intro: "通过编码器-解码器和跳跃连接完成像素级分割，可评估 Dice、IoU 并展示分割可视化结果。", link: "https://keras.io/examples/vision/oxford_pets_image_segmentation/" },
  { name: "DeepLabV3 语义分割", category: "计算机视觉", level: "挑战", intro: "使用空洞卷积和多尺度上下文进行语义分割，适合比较不同输出步幅和预训练骨干网络。", link: "https://github.com/pytorch/vision/blob/main/torchvision/models/segmentation/deeplabv3.py" },
  { name: "Segment Anything（SAM）", category: "计算机视觉", level: "挑战", intro: "使用提示驱动的通用分割模型，适合做点、框、掩码提示对分割效果的影响分析。", link: "https://github.com/facebookresearch/segment-anything" },
  { name: "CLIP 零样本图文匹配", category: "多模态学习", level: "挑战", intro: "把图像和文本映射到同一语义空间，可完成零样本分类、图文检索和提示词敏感性分析。", link: "https://github.com/openai/CLIP" },
  { name: "图像描述生成", category: "多模态学习", level: "挑战", intro: "结合视觉编码器和文本解码器生成图像描述，可用 BLEU、样例展示和错误描述分析评价结果。", link: "https://www.tensorflow.org/tutorials/text/image_captioning" },
  { name: "BERT 特征抽取", category: "自然语言处理", level: "中等", intro: "使用预训练模型输出句向量或 token 表示，比较冻结特征、微调模型和传统词向量的下游表现。", link: "https://huggingface.co/docs/transformers/tasks/feature_extraction" },
  { name: "SimCSE 句向量学习", category: "自然语言处理", level: "挑战", intro: "通过对比学习训练句子嵌入，可完成语义相似度、聚类和检索任务，并评估 Spearman 相关系数。", link: "https://github.com/princeton-nlp/SimCSE" },
  { name: "TextCNN 文本分类", category: "自然语言处理", level: "中等", intro: "使用不同窗口大小的卷积核提取局部 n-gram 特征，完成情感分类或新闻分类任务。", link: "https://github.com/dennybritz/cnn-text-classification-tf" },
  { name: "字符级 RNN 分类", category: "自然语言处理", level: "中等", intro: "用循环神经网络处理字符序列，可完成姓名国籍分类等任务，并理解隐藏状态传递。", link: "https://pytorch.org/tutorials/intermediate/char_rnn_classification_tutorial.html" },
  { name: "LSTM 语言模型", category: "自然语言处理", level: "中等", intro: "使用 LSTM 建模文本序列并预测下一个词，适合分析困惑度、序列长度和梯度裁剪。", link: "https://github.com/pytorch/examples/tree/main/word_language_model" },
  { name: "Seq2Seq 机器翻译", category: "自然语言处理", level: "挑战", intro: "用编码器-解码器结构完成序列到序列转换，可展示教师强制、注意力和翻译样例。", link: "https://pytorch.org/tutorials/intermediate/seq2seq_translation_tutorial.html" },
  { name: "Transformer 编码器", category: "自然语言处理", level: "挑战", intro: "基于自注意力机制处理序列数据，适合分析位置编码、多头注意力和长序列建模。", link: "https://pytorch.org/tutorials/beginner/transformer_tutorial.html" },
  { name: "BERT 文本分类微调", category: "自然语言处理", level: "挑战", intro: "在预训练语言模型上微调分类头，可完成情感分析、主题分类或意图识别任务。", link: "https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification" },
  { name: "RoBERTa 分类微调", category: "自然语言处理", level: "挑战", intro: "使用改进的预训练语言模型进行文本分类，可与 BERT 比较收敛速度、准确率和错误样本。", link: "https://huggingface.co/docs/transformers/tasks/sequence_classification" },
  { name: "命名实体识别（NER）", category: "自然语言处理", level: "挑战", intro: "识别人名、地名、机构名等实体边界与类别，可评估实体级 Precision、Recall 和 F1。", link: "https://github.com/huggingface/transformers/tree/main/examples/pytorch/token-classification" },
  { name: "抽取式问答", category: "自然语言处理", level: "挑战", intro: "从给定篇章中抽取答案片段，可分析上下文长度、答案跨度和无答案样本处理。", link: "https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering" },
  { name: "T5 文本摘要", category: "自然语言处理", level: "挑战", intro: "将文本到文本框架用于摘要生成，可评估 ROUGE、人工可读性和生成长度控制。", link: "https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization" },
  { name: "GPT 因果语言模型微调", category: "自然语言处理", level: "挑战", intro: "微调自回归语言模型完成续写或领域文本生成，重点关注数据清洗、困惑度和生成案例分析。", link: "https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling" },
  { name: "Sentence-BERT 语义检索", category: "自然语言处理", level: "中等", intro: "把句子编码为向量并进行相似度检索，可完成 FAQ 匹配、论文检索或语义搜索系统。", link: "https://www.sbert.net/examples/applications/semantic-search/README.html" },
  { name: "ColBERT 神经检索", category: "自然语言处理", level: "挑战", intro: "使用 late interaction 建模查询和文档 token 级匹配，适合与 BM25、Sentence-BERT 比较检索质量。", link: "https://github.com/stanford-futuredata/ColBERT" },
  { name: "RAG 检索增强生成", category: "自然语言处理", level: "挑战", intro: "结合文档检索与生成模型回答问题，可分析检索召回、上下文拼接和幻觉问题。", link: "https://github.com/huggingface/smolagents/blob/main/examples/rag.py" },
  { name: "Whisper 语音识别", category: "语音与多模态", level: "挑战", intro: "使用端到端语音识别模型完成音频转文字，可比较不同语言、噪声和音频长度下的识别结果。", link: "https://github.com/openai/whisper" },
  { name: "CTC 语音识别流水线", category: "语音与多模态", level: "挑战", intro: "基于 CTC 解码完成语音识别，适合分析声学特征、解码策略和词错误率。", link: "https://pytorch.org/audio/stable/tutorials/speech_recognition_pipeline_tutorial.html" },
  { name: "Q-Learning 强化学习", category: "强化学习", level: "中等", intro: "在网格世界或简单 Gym 环境中学习动作价值表，理解探索、利用、学习率和折扣因子。", link: "https://github.com/dennybritz/reinforcement-learning/tree/master/TD" },
  { name: "SARSA 强化学习", category: "强化学习", level: "中等", intro: "实现 on-policy 时序差分学习，与 Q-Learning 对比策略更新方式和风险偏好。", link: "https://github.com/dennybritz/reinforcement-learning/tree/master/TD" },
  { name: "DQN 深度 Q 网络", category: "强化学习", level: "挑战", intro: "用神经网络近似 Q 函数，结合经验回放和目标网络解决离散动作控制任务。", link: "https://pytorch.org/tutorials/intermediate/reinforcement_q_learning.html" },
  { name: "PPO 近端策略优化", category: "强化学习", level: "挑战", intro: "使用裁剪目标稳定策略梯度训练，适合连续或离散控制任务并分析奖励曲线。", link: "https://stable-baselines3.readthedocs.io/en/master/modules/ppo.html" },
  { name: "A2C 优势演员-评论家", category: "强化学习", level: "挑战", intro: "同时学习策略和价值函数，用优势函数降低方差，可与 DQN 或 PPO 比较训练稳定性。", link: "https://stable-baselines3.readthedocs.io/en/master/modules/a2c.html" },
  { name: "DDPG 连续控制", category: "强化学习", level: "挑战", intro: "面向连续动作空间的确定性策略梯度算法，适合摆杆、机械臂等控制任务。", link: "https://stable-baselines3.readthedocs.io/en/master/modules/ddpg.html" },
  { name: "TD3 双延迟深度确定性策略", category: "强化学习", level: "挑战", intro: "在 DDPG 基础上使用双 Q 网络和延迟策略更新，减少价值高估并提升连续控制表现。", link: "https://stable-baselines3.readthedocs.io/en/master/modules/td3.html" },
  { name: "SAC 软演员-评论家", category: "强化学习", level: "挑战", intro: "通过最大熵目标提升探索能力，适合复杂连续控制任务并分析温度系数影响。", link: "https://stable-baselines3.readthedocs.io/en/master/modules/sac.html" },
  { name: "REINFORCE 策略梯度", category: "强化学习", level: "中等", intro: "直接优化策略概率的蒙特卡洛策略梯度算法，适合理解回报估计和高方差问题。", link: "https://github.com/pytorch/examples/tree/main/reinforcement_learning" },
  { name: "AlphaZero 蒙特卡洛树搜索", category: "强化学习", level: "挑战", intro: "结合策略价值网络和 MCTS 完成棋类博弈，适合分析自我对弈、搜索次数和策略改进。", link: "https://github.com/suragnair/alpha-zero-general" },
  { name: "APPNP 个性化传播图神经网络", category: "图学习", level: "挑战", intro: "结合神经网络预测和 Personalized PageRank 传播，适合分析传播步数、阻尼系数和节点分类效果。", link: "https://github.com/pyg-team/pytorch_geometric/blob/master/examples/appnp.py" },
  { name: "Node2Vec 图表示学习", category: "图学习", level: "中等", intro: "通过带偏随机游走学习节点向量，可完成节点分类、聚类和相似节点检索。", link: "https://github.com/eliorc/node2vec" },
  { name: "GCN 图卷积网络", category: "图学习", level: "挑战", intro: "在图结构上聚合邻居特征完成节点分类，适合 Cora、Citeseer 等引文网络实验。", link: "https://github.com/pyg-team/pytorch_geometric/blob/master/examples/gcn.py" },
  { name: "GAT 图注意力网络", category: "图学习", level: "挑战", intro: "为邻居节点分配注意力权重，可分析不同邻居对节点预测的贡献和注意力可解释性。", link: "https://github.com/pyg-team/pytorch_geometric/blob/master/examples/gat.py" },
  { name: "GraphSAGE 归纳图学习", category: "图学习", level: "挑战", intro: "通过采样邻居聚合实现大图和新节点表示学习，适合社交网络或商品图推荐场景。", link: "https://pytorch-geometric.readthedocs.io/en/latest/generated/torch_geometric.nn.models.GraphSAGE.html" },
  { name: "DeepFM 点击率预估", category: "推荐系统", level: "挑战", intro: "结合因子分解机和深度网络建模低阶与高阶特征交互，适合广告点击率预测和推荐排序。", link: "https://github.com/shenweichen/DeepCTR-Torch" },
  { name: "矩阵分解推荐", category: "推荐系统", level: "中等", intro: "将评分矩阵分解为用户和物品隐向量，适合分析隐因子数量、正则化和冷启动问题。", link: "https://github.com/recommenders-team/recommenders/blob/main/examples/02_model_collaborative_filtering/surprise_svd_deep_dive.ipynb" },
  { name: "神经协同过滤（NCF）", category: "推荐系统", level: "挑战", intro: "用神经网络学习用户和物品交互函数，可与矩阵分解比较非线性表达能力。", link: "https://github.com/hexiangnan/neural_collaborative_filtering" },
  { name: "因子分解机（FM）", category: "推荐系统", level: "中等", intro: "建模稀疏特征之间的二阶交互，适合广告点击率预测和推荐排序任务。", link: "https://github.com/rixwew/pytorch-fm" },
  { name: "LSTM 时间序列预测", category: "时间序列", level: "中等", intro: "使用循环神经网络建模历史序列依赖，可预测负荷、销量、温度或金融时间序列。", link: "https://pytorch-forecasting.readthedocs.io/en/stable/tutorials/stallion.html" },
  { name: "Time Series Transformer", category: "时间序列", level: "挑战", intro: "使用 Transformer 结构处理时间序列预测任务，可比较传统模型、LSTM 和注意力模型的误差。", link: "https://huggingface.co/docs/transformers/model_doc/time_series_transformer" },
  { name: "NeuralProphet 时间序列预测", category: "时间序列", level: "中等", intro: "结合趋势、季节性、自回归和神经网络模块进行预测，适合分析节假日、外生变量和预测区间。", link: "https://github.com/ourownstory/neural_prophet" },
  { name: "Neural ODE 连续深度模型", category: "深度学习", level: "挑战", intro: "把残差网络视为连续动力系统，用微分方程建模隐藏状态演化，适合探索不规则时间序列和动态系统。", link: "https://github.com/rtqichen/torchdiffeq" }
];

const scoreByLevel = {
  "中等": 85,
  "挑战": 100
};

const grid = document.querySelector("#project-grid");
const searchInput = document.querySelector("#search-input");
const categoryFilter = document.querySelector("#category-filter");
const levelFilter = document.querySelector("#level-filter");
const visibleCount = document.querySelector("#visible-count");
const totalCount = document.querySelector("#total-count");

const categories = [...new Set(projects.map((project) => project.category))].sort((a, b) => a.localeCompare(b, "zh-CN"));

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilter.appendChild(option);
});

totalCount.textContent = projects.length;

function renderProjects() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const level = levelFilter.value;

  const visibleProjects = projects.filter((project) => {
    const score = scoreByLevel[project.level] || "";
    const text = `${project.name} ${project.category} ${project.level} ${score}分 ${project.intro}`.toLowerCase();
    const matchesKeyword = !keyword || text.includes(keyword);
    const matchesCategory = category === "all" || project.category === category;
    const matchesLevel = level === "all" || project.level === level;
    return matchesKeyword && matchesCategory && matchesLevel;
  });

  visibleCount.textContent = visibleProjects.length;

  grid.innerHTML = visibleProjects.map((project, index) => `
    <article class="project-card">
      <h3>${index + 1}. ${project.name}</h3>
      <div class="project-meta">
        <span>${project.category}</span>
        <span>${project.level}</span>
        <span class="score-chip">${scoreByLevel[project.level]} 分</span>
      </div>
      <p>${project.intro}</p>
      <a class="code-link" href="${project.link}" target="_blank" rel="noopener noreferrer">代码链接</a>
    </article>
  `).join("");
}

searchInput.addEventListener("input", renderProjects);
categoryFilter.addEventListener("change", renderProjects);
levelFilter.addEventListener("change", renderProjects);

renderProjects();
